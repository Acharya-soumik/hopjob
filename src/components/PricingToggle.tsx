'use client';

import { Switch } from "@/components/ui/switch";

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (checked: boolean) => void;
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center gap-x-3">
      <span className="text-sm font-medium">Monthly</span>
      <Switch
        checked={isAnnual}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-primary"
      />
      <span className="text-sm font-medium">Annual</span>
      <span className="ml-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
        Save 20%
      </span>
    </div>
  );
} 