const emailValidate = async (request, response, next) => {
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const { email } = await request.body;

  if (!email) {
    return response.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!regexEmail.test(email)) {
    return response.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  } 
  next();
};

module.exports = emailValidate;