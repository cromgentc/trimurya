import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';
import mongoose from 'mongoose';
import User from './models/User.js';

dotenv.config();

const START_PORT = process.env.PORT || 5000;

async function ensureAdmin() {
  if (mongoose.connection.readyState !== 1) {
    console.log('Admin seeding skipped: MongoDB not connected.');
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@trimurya.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';
  const adminName = process.env.ADMIN_NAME || 'System Admin';

  try {
    const existing = await User.findOne({ email: adminEmail });
    if (!existing) {
      await User.create({ name: adminName, email: adminEmail, password: adminPassword, role: 'admin', verified: true });
      console.log('Admin user seeded successfully (email:', adminEmail, ')');
    }
  } catch (error) {
    console.log('Admin seeding skipped:', error.message);
  }
}

function startServer(port) {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Trimurya API running on http://localhost:${port}`);
      resolve(server);
    });
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        reject(new Error(`EADDRINUSE:${port}`));
      } else {
        reject(err);
      }
    });
  });
}

async function tryStart() {
  await connectDB();
  await ensureAdmin();

  let tried = START_PORT;
  let server;
  let lastErr;

  while (tried <= START_PORT + 10) {
    try {
      server = await startServer(tried);
      return;
    } catch (err) {
      lastErr = err;
      if (!String(err.message).includes(`EADDRINUSE:${tried}`)) {
        console.log('Failed to start server:', err.message);
        process.exit(1);
      }
      console.log(`Port ${tried} busy, trying next...`);
      tried++;
    }
  }

  console.log('Failed to start server: all checked ports are busy.');
  process.exit(1);
}

tryStart().catch((error) => {
  console.log('Failed to start server:', error.message);
  process.exit(1);
});
