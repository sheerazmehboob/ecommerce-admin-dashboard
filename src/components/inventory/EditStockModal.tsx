import React from 'react';
import Modal from '../common/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ImageUploader from '../common/ImageUploader';
import type { Product } from '../../types/product';

const validationSchema = Yup.object({
  title: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().typeError('Price must be a number').positive('Price must be positive').required('Price is required'),
  stock: Yup.number().typeError('Stock must be a number').min(0, 'Stock cannot be negative').required('Stock is required'),
});

interface EditStockModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
  updating: boolean;
  onUpdate: () => void;
}

const EditStockModal: React.FC<EditStockModalProps> = ({
  open, onClose, product, updating, onUpdate
}) => (
  <Modal open={open} onClose={onClose}>
    {product && (
      <>
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-800" style={{ background: 'inherit' }}>
          <h2 className="text-xl font-bold text-gray-100">Edit Product</h2>
          <button onClick={onClose} className="bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full p-2 shadow focus:outline-none">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        {/* Form Content */}
        <div className="overflow-y-auto flex-1">
          <Formik
            initialValues={{
              title: product.name || '',
              description: product.description || '',
              price: product.price || '',
              stock: product.stock || '',
              image: product.imageUrl || null,
              imageUrl: product.imageUrl || product.imageUrl || '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (_unused, { setSubmitting }) => {
              setSubmitting(true);
              await new Promise((res) => setTimeout(res, 1000));
              onUpdate();
              setSubmitting(false);
              onClose();
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="flex flex-col gap-3">
                <div>
                  <label className="block font-semibold mb-2 text-gray-200">Product Image</label>
                  <ImageUploader onUpload={(file, url) => setFieldValue('image', file) || setFieldValue('imageUrl', url)} previewUrl={undefined} disabled={isSubmitting} />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-200" htmlFor="title">Name</label>
                  <Field name="title" placeholder="Product name" className="border rounded-lg px-4 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0 text-base" />
                  <ErrorMessage name="title" component="div" className="text-red-400 text-xs mt-1" />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block font-semibold mb-1 text-gray-200" htmlFor="price">Price ($)</label>
                    <Field name="price" type="number" placeholder="0.00" className="border rounded-lg px-4 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0 text-base" />
                    <ErrorMessage name="price" component="div" className="text-red-400 text-xs mt-1" />
                  </div>
                  <div className="flex-1">
                    <label className="block font-semibold mb-1 text-gray-200" htmlFor="stock">Stock</label>
                    <Field name="stock" type="number" placeholder="0" className="border rounded-lg px-4 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0 text-base" />
                    <ErrorMessage name="stock" component="div" className="text-red-400 text-xs mt-1" />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-200" htmlFor="description">Description</label>
                  <Field as="textarea" name="description" placeholder="Product description" className="border rounded-lg px-4 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0 text-base min-h-[100px] max-h-40 overflow-y-auto" />
                  <ErrorMessage name="description" component="div" className="text-red-400 text-xs mt-1" />
                </div>
                {/* Footer Button */}
                <div className="sticky bottom-0 px-8 py-4 border-t border-gray-800 bg-inherit z-10">
          <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-lg px-3 py-2 font-semibold w-full text-lg disabled:opacity-60 shadow-md"
                    disabled={updating || isSubmitting}
          >
                    {updating ? <span className="inline-block animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> : 'Update Product'}
          </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </>
    )}
  </Modal>
);

export default EditStockModal;
