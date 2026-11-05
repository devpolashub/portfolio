import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputHTMLAttributes } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export function InputField({
  label,
  id,
  type = "text",
  ...props
}: InputFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>
        {label}
        {props.required && <span className="text-destructive">*</span>}
      </FieldLabel>

      <Input id={id} type={type} {...props} />
    </Field>
  )
}
