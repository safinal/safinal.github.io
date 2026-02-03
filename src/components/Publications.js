'use client';
import Cart from './Cart';
import Image from 'next/image';
import publicationRectangle from '../../public/images/design/publicationRectangle.svg';
import { useState, useEffect } from 'react';
import Modal from './Modal';

const Publications = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [cartTitle, setCartTitle] = useState('');

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [showModal])

  return (
    <div id="publicationSection" className="relative scroll-mt-16">
      {showModal && <Modal title={cartTitle} setShowModal={setShowModal} data={modalData} />}
      <Image alt="" src={publicationRectangle} className="absolute left-0 top-96 -z-10 hidden lg:block" />
      <div className="container m-auto px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-8 md:pt-16">
        <div className="">
          <p className="text-gray-dark  text-xl xl:text-2xl 2xl:text-3xl mb-3">Publications</p>
        </div>
        <div className="flex flex-col items-center justify-center pt-8 xl:pt-16">
          {props.data.publications.map((publication, index) =>
            <Cart setCartTitle={setCartTitle} setShowModal={setShowModal} setModalData={setModalData} key={index} author={true} data={publication} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;
