
import React, { useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import { storage } from '../pages/firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

ReactQuill.Quill.register('modules/imageResize', ImageResize);

const Editor = ({ value, onChange }) => {
  const quillRef = useRef(null);

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const imageUrl = await uploadImage(file);
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', imageUrl);
      }
    };
  };

  const uploadImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `images/${file.name}`);
      uploadBytes(storageRef, file)
        .then((snapshot) => getDownloadURL(snapshot.ref))
        .then((downloadURL) => {
          resolve(downloadURL);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['image'],
      ],
      handlers: {
        'image': handleImageUpload,
      },
    },
    imageResize: {
      modules: ['Resize', 'DisplaySize', 'Toolbar']
    }
  }), []);

  const formats = [
    'header', 'font', 'list', 'bullet',
    'bold', 'italic', 'underline',
    'color', 'background', 'align', 'image'
  ];

  return (
    <ReactQuill
      ref={quillRef}
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme="snow"
    />
  );
};

export default Editor;
