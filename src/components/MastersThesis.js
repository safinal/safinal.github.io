'use client';
import Cart from './Cart';
import Image from 'next/image';
import publicationRectangle from '../../public/images/design/publicationRectangle.svg';
import { useState, useEffect } from 'react';
import Modal from './Modal';

const MastersThesis = (props) => {
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
    <div id="mastersThesisSection" className="relative scroll-mt-16">
      {showModal && <Modal title={cartTitle} setShowModal={setShowModal} data={modalData} />}
      <div className="container m-auto px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-5 md:pt-8">
        <div className="">
          <p className="text-gray-dark  text-xl xl:text-2xl 2xl:text-3xl mb-3">Master&apos;s Thesis</p>
        </div>
        <div className="flex flex-col items-center justify-center pt-4 xl:pt-6">
          <Cart setCartTitle={setCartTitle} setShowModal={setShowModal} setModalData={setModalData} author={true} data={props.data.thesis} />
        </div>
      </div>
    </div>
  );
};

export default MastersThesis;
