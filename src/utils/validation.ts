interface ValidationRule {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
  maxLength?: number;
  password?: boolean;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

export const validatePassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const validateForm = (formData: Record<string, string>, rules: Record<string, ValidationRule>): Record<string, string> => {
  const errors: Record<string, string> = {};

  for (const [field, value] of Object.entries(formData)) {
    const fieldRules = rules[field];
    if (!fieldRules) continue;

    if (fieldRules.required && !validateRequired(value)) {
      errors[field] = 'This field is required';
    }

    if (fieldRules.email && !validateEmail(value)) {
      errors[field] = 'Please enter a valid email address';
    }

    if (fieldRules.phone && !validatePhone(value)) {
      errors[field] = 'Please enter a valid phone number';
    }

    if (fieldRules.minLength && !validateMinLength(value, fieldRules.minLength)) {
      errors[field] = `This field must be at least ${fieldRules.minLength} characters`;
    }

    if (fieldRules.maxLength && !validateMaxLength(value, fieldRules.maxLength)) {
      errors[field] = `This field must be no more than ${fieldRules.maxLength} characters`;
    }

    if (fieldRules.password && !validatePassword(value)) {
      errors[field] = 'Password must be at least 8 characters and contain uppercase, lowercase, and numbers';
    }
  }

  return errors;
}; 