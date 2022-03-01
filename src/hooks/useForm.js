import { useState } from 'react';

<<<<<<< HEAD
=======

>>>>>>> c71bdc997ac83b914e536c1f914eeba4935af42e
export default function useForm(inputs = {}) {
  const [formState, setFormState] = useState(inputs);
  const [formError, setFormError] = useState('');

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return { formState, formError, handleFormChange, setFormError };
}
