import React from 'react';
import { useFormik } from 'formik'; // Importa o hook useFormik do Formik para gerenciar o estado do formulário
import * as Yup from 'yup'; // Importa Yup para a validação de schema

const FormularioEmail = () => {
  // Inicializa o Formik, responsável por gerenciar o estado do formulário, validação e envio
  const formik = useFormik({
    // Definindo os valores iniciais do formulário
    initialValues: {
      email: '',
    },
    // Configurando a validação do formulário com Yup
    validationSchema: Yup.object({
      // Validação do campo email:
      email: Yup.string()
        .email('Endereço de e-mail inválido') // Valida se o valor inserido é um e-mail válido
        .required('Campo obrigatório'), // Valida se o campo foi preenchido
    }),

    onSubmit: (values) => {
      console.log('Email enviado:', values.email);
    },
  });

  // Retorna o JSX com o formulário e seus campos
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange} // Atualiza o estado do formulário quando o usuário digita no input
          onBlur={formik.handleBlur} // Marca o campo como "tocado" quando o usuário sai do campo
          value={formik.values.email} // Valor do campo vinculado ao estado gerenciado pelo formik
        />
        {/* Verifica se o campo foi "tocado" (se o usuário interagiu com ele) e se há erros */}
        {formik.touched.email && formik.errors.email ? (
          // Se houver erro, exibe a mensagem de erro em vermelho
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioEmail; // Exporta o componente para ser utilizado em outras partes do projeto
