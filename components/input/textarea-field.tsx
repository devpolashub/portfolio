import { TextareaHTMLAttributes } from "react"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  id: string
  description?: string
}

export function TextareaField({
  label,
  id,
  name = id,
  description,
  ...props
}: TextareaFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>
        {label}
        {props.required && <span className="text-destructive">*</span>}
      </FieldLabel>

      {description && <FieldDescription>{description}</FieldDescription>}

      <Textarea className="min-h-32" id={id} name={name} {...props} />
    </Field>
  )
}
