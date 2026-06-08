"use client";

import styles from './ProfileEdit.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import FormUpdate from '@/components/form/FormUpdate';
import Retroced from '@/components/layout/Retroced';
import Toast from '@/components/Toast/Toast';

export default function ProfileEdit({ userData }) {
  const [isImageOptionsOpen, setIsImageOptionsOpen] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState('/assets/avatar.jpg');
  const [toastVisivel, setToastVisivel] = useState(false);
  const [toastMensagem, setToastMensagem] = useState('');
  const galleryInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const objectUrlRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  // Simulacao de payload vindo da API. Quando integrar, basta passar userData por props.
  const apiUserData = userData ?? {
    nome: 'Maria',
    sobrenome: 'Catariana',
    email: 'maria@email.com',
    telefone: '999999999',
    endereco: 'Rua Olida, Centro 1000, Salvador',
  };

  const campos = [
    { name: 'nome', placeholder: 'Nome', type: 'text', autoComplete: 'given-name', value: apiUserData.nome },
    { name: 'sobrenome', placeholder: 'Sobrenome', type: 'text', autoComplete: 'family-name', value: apiUserData.sobrenome },
    { name: 'email', placeholder: 'Email', type: 'email', autoComplete: 'email', value: apiUserData.email },
    { name: 'telefone', placeholder: 'Telefone', type: 'tel', autoComplete: 'tel', value: apiUserData.telefone },
    { name: 'endereco', placeholder: 'Endereco', type: 'text', autoComplete: 'street-address', value: apiUserData.endereco },
  ];
  const formKey = JSON.stringify(campos.map((campo) => campo.value ?? ''));

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }

      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const handleSalvarPerfil = async () => {
    setToastMensagem('Perfil salvo com sucesso');
    setToastVisivel(false);

    requestAnimationFrame(() => {
      setToastVisivel(true);
    });

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setToastVisivel(false);
    }, 2800);
  };

  const handleFileSelected = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setIsImageOptionsOpen(false);
      return;
    }

    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
    }

    const nextUrl = URL.createObjectURL(file);
    objectUrlRef.current = nextUrl;
    setAvatarSrc(nextUrl);
    setIsImageOptionsOpen(false);

    // Permite selecionar o mesmo arquivo novamente.
    event.target.value = '';
  };

  const openGallery = () => {
    setIsImageOptionsOpen(false);
    galleryInputRef.current?.click();
  };

  const openCamera = () => {
    setIsImageOptionsOpen(false);
    cameraInputRef.current?.click();
  };

  return (
    <div className={styles.container}> 
      <div className={styles.toastTop}>
        <Toast sucesso={true} mensagem={toastMensagem} visivel={toastVisivel} />
      </div>

      {/* Top Bar */}      
      <Retroced title="Editar Perfil" />     
      
      {/* Avatar */}
      <div className={styles.avatarSection}>
        <div className={styles.avatarWrapper}>
          <Image className={styles.avatar} src={avatarSrc} alt="Profile" fill sizes="clamp(4.2rem, 18vw, 6.2rem)" unoptimized={avatarSrc.startsWith('blob:')} />
        </div>

        <button
          type="button"
          className={styles.avatarEdit}
          aria-label="Alterar foto de perfil"
          aria-expanded={isImageOptionsOpen}
          onClick={() => setIsImageOptionsOpen((current) => !current)}
        >
          <FaPen size={12} />
        </button>

        {isImageOptionsOpen ? (
          <div className={styles.imageOptionsCard} role="menu" aria-label="Selecionar origem da imagem">
            <button
              type="button"
              className={styles.imageOptionsClose}
              aria-label="Fechar opções de imagem"
              onClick={() => setIsImageOptionsOpen(false)}
            >
              x
            </button>
            <button type="button" className={styles.imageOptionButton} role="menuitem" onClick={openGallery}>
              Galeria
            </button>
            <button type="button" className={styles.imageOptionButton} role="menuitem" onClick={openCamera}>
              Câmera
            </button>
          </div>
        ) : null}

        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          className={styles.hiddenInput}
          onChange={handleFileSelected}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className={styles.hiddenInput}
          onChange={handleFileSelected}
        />
      </div>
      {/* Form */}
      <FormUpdate
        key={formKey}
        campo={campos}
        buttonText="Salvar"
        onPrimaryAction={handleSalvarPerfil}
      />
    </div>
  );
}
