'use client';

import { ChangeEvent, useState } from 'react';

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null);

  function onMediaSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    
    if (!files) {
      return;
    }

    // A mesma forma serve para fazer preview de videos
    // porém para vídeos ao invés de img, use a tag vídeo
    const previewUrl = URL.createObjectURL(files[0]);
    setPreview(previewUrl);
  }

  return (
    <>
      <input
        name='coverUrl'
        id='midia'
        type='file'
        accept='image/*'
        className='invisible w-0 h-0'
        onChange={onMediaSelected}
      />

      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          width={500}
          className='w-full aspect-video rounded-lg object-cover'
          alt=''
        />
      )}
    </>
  );
}