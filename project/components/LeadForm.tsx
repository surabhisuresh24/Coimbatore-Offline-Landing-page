'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone as PhoneIcon } from 'lucide-react';

interface LeadFormProps {
  onSuccess: () => void;
}

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
    status: '',
  });

  const onChange =
    (key: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((s) => ({ ...s, [key]: e.target.value }));
    };

  const handlePhoneContinue = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length < 10) return;
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    onSuccess();
  };

  const StepHeader = () => (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        {/* Left: 1 Contact */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#00528a] text-white flex items-center justify-center text-sm font-bold">
            1
          </div>
          <span className="text-[#00528a] font-semibold">Contact</span>
        </div>

        {/* Center progress line (short like ref) */}
        <div className="hidden sm:block w-48 h-[3px] bg-gray-200 rounded mx-3">
          <div
            className="h-[3px] bg-[#00528a] rounded transition-all"
            style={{ width: step === 1 ? '45%' : '100%' }}
          />
        </div>

        {/* Right: 2 Details */}
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
              step === 2 ? 'bg-[#00528a] text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            2
          </div>
          <span className={`${step === 2 ? 'text-[#00528a]' : 'text-gray-500'} font-semibold`}>
            Details
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="
        bg-white rounded-2xl shadow-2xl
        w-full max-w-[500px]   /* narrower container */
        mx-auto
        p-5 sm:p-6
      "
    >
      <StepHeader />

      {step === 1 ? (
        <form onSubmit={handlePhoneContinue} className="space-y-5">
          {/* Forced two-line heading like your ref */}
          <h2 className="text-[28px] font-extrabold text-[#00528a] leading-[1.15] tracking-[-0.2px]">
            <span className="block">Start Your CMA USA</span>
            <span className="block">Journey</span>
          </h2>

          {/* Now “Coimbatore offline campus” is on one line */}
          <p className="text-gray-600">
            <span className="block">
              Enter your phone number to get started with our
            </span>
            <span className="block">Coimbatore offline campus</span>
          </p>

          <div>
            <Label htmlFor="phone" className="text-gray-700 font-semibold">
              Phone Number *
            </Label>

            <div className="relative mt-2">
              <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                placeholder="Enter 10-digit mobile number"
                value={formData.phone}
                onChange={onChange('phone')}
                className="h-12 pl-10 rounded-xl"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base bg-[#00528a] hover:bg-[#003d6b] font-semibold rounded-xl"
          >
            Continue →
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-[#00528a] hover:underline text-sm -mt-1"
          >
            ← Back to phone number
          </button>

          <h2 className="text-[28px] font-extrabold text-[#00528a] leading-[1.15] tracking-[-0.2px]">
            <span className="block">Complete Your</span>
            <span className="block">Registration</span>
          </h2>

          <div>
            <Label htmlFor="name" className="text-gray-700 font-semibold">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={onChange('name')}
              required
              className="mt-2 h-12 rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700 font-semibold">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={onChange('email')}
              required
              className="mt-2 h-12 rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="status" className="text-gray-700 font-semibold">
              Current Status / Experience *
            </Label>
            <select
              id="status"
              value={formData.status}
              onChange={onChange('status')}
              required
              className="mt-2 w-full h-12 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00528a]"
            >
              <option value="">Select your status</option>
              <option value="11th">Class 11 Student</option>
              <option value="12th">Class 12 Student</option>
              <option value="graduate">pursuing Graduation</option>
              <option value="postgrad">pursuing Post-Graduation</option>
              <option value="ca">Graduate And Above - No Experience</option>
              <option value="working">0-1 Yr</option>
              <option value="working">2-5 Yrs</option>
              <option value="working">5+ Yrs</option>
            </select>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base bg-[#feda2d] text-[#00528a] hover:bg-[#e5c628] font-bold rounded-xl"
          >
            {isSubmitting ? 'Submitting…' : 'Submit & Get Details'}
          </Button>
        </form>
      )}
    </div>
  );
}
