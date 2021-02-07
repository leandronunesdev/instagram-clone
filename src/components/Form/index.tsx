import axios from 'axios';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/ducks/user/types';

const Form  = () => {

  const { username, userPicture } = useSelector((state: UserState) => state.user)  

  const inputImage = useRef<HTMLInputElement>(null)
  const inputDescription = useRef<HTMLInputElement>(null)

  const enviarFormulario = () => {

    const requisicao = {
      postPicture: inputImage.current?.value,
      description: inputDescription.current?.value,
      user: username,
      userPicture: userPicture,
      likes: 0
    } 

    axios.post("http://localhost:4000/posts", requisicao)
  }

  return (
      <div className="form">
        <p>Faça uma postagem aqui</p>
        <input type="text" placeholder="Cole a url da imagem" ref={inputImage} />
        <input type="text" placeholder="Digite uma descrição" ref={inputDescription} />
        <button onClick={enviarFormulario}>Postar!</button>
      </div>
  );
}

export default Form;