import { InfoTooltip } from "./InfoTooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFieldProps {
  label: string;
  value: number | string;
  onChange: (val: number) => void;
  tooltip?: string;
  tooltipSource?: string;
  suffix?: string;
  prefix?: string;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
}

export function InputField({
  label,
  value,
  onChange,
  tooltip,
  tooltipSource,
  suffix,
  prefix,
  min,
  max,
  step = 0.01,
  placeholder = "0",
  disabled = false,
}: InputFieldProps) {
  return (
    <div className="space-y-1">
      <Label className="text-sm font-medium flex items-center gap-0.5">
        {label}
        {tooltip && <InfoTooltip content={tooltip} source={tooltipSource} />}
      </Label>
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-muted-foreground text-sm pointer-events-none">
            {prefix}
          </span>
        )}
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          disabled={disabled}
          className={`${prefix ? "pl-7" : ""} ${suffix ? "pr-10" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 text-muted-foreground text-sm pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
