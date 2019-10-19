export const validate = values => {
  const errors = {};
  const requiredFields = ['title', 'subject', 'body', 'recipients'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = '* Champ requis';
    }
  });
  if (
    values.recipients &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.recipients)
  ) {
    errors.recipients = "Merci de saisir un format d'email valide";
  }
  return errors;
};
