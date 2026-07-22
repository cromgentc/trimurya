import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import Button from './Button.jsx';
import api from '../services/api.js';

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState(null);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      await api.post('/contact', data);
      setStatus({ type: 'success', message: 'Thanks! Your inquiry has been received. We will reply within one business day.' });
      reset();
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to send your request right now. Please try again later or email us directly.' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      {status && (
        <div className={`rounded-3xl border p-4 text-sm ${status.type === 'success' ? 'border-secondary/30 bg-secondary/10 text-secondary dark:border-secondary/40 dark:bg-secondary/20 dark:text-secondary' : 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/30 dark:bg-rose-950/30 dark:text-rose-200'}`}>
          {status.message}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <input className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950" placeholder="Full name" {...register('name', { required: true })} />
        <input className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950" placeholder="Email address" type="email" {...register('email', { required: true })} />
      </div>

      {!compact && (
        <div className="grid gap-4 md:grid-cols-2">
          <input className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950" placeholder="Phone / WhatsApp" {...register('phone')} />
          <input className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950" placeholder="Service interest" {...register('service')} />
        </div>
      )}

      <textarea className="focus-ring min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950" placeholder="Tell us about your requirement" {...register('message', { required: true })} />
      <Button type="submit" disabled={isSubmitting} className="w-full md:w-fit">
        <FiSend /> {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
}
