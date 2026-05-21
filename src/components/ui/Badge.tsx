import clsx from 'clsx';

type BadgeProps = {
  label: string;
  variant?: 'primary' | 'accent' | 'green' | 'gray';
};

export default function Badge({ label, variant = 'primary' }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full',
        variant === 'primary' && 'bg-primary/10 text-primary',
        variant === 'accent' && 'bg-accent/10 text-accent-dark',
        variant === 'green' && 'bg-green-100 text-green-700',
        variant === 'gray' && 'bg-gray-100 text-gray-600',
      )}
    >
      {label}
    </span>
  );
}
