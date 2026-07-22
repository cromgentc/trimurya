import { useForm } from 'react-hook-form';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Auth() {
  const { register, handleSubmit } = useForm();
  return (
    <section className="mx-auto max-w-xl px-4 py-20">
      <SectionHeader eyebrow="Authentication" title="Login To Your Dashboard" copy="Role-based access for Admin, Employee, Client, and Candidate users." />
      <form onSubmit={handleSubmit(() => null)} className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-900">
        <input className="focus-ring mb-4 w-full rounded-xl border border-slate-200 px-4 py-3 dark:border-slate-800 dark:bg-slate-950" placeholder="Email" type="email" {...register('email')} />
        <input className="focus-ring mb-4 w-full rounded-xl border border-slate-200 px-4 py-3 dark:border-slate-800 dark:bg-slate-950" placeholder="Password" type="password" {...register('password')} />
        <Button className="w-full">Login</Button>
        <p className="mt-4 text-center text-sm text-slate-500">Register • Forgot Password • Email Verification • OTP Verification</p>
      </form>
    </section>
  );
}
