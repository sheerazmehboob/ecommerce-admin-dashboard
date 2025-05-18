import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageUploader from '../common/ImageUploader';

const initialForm = {
  title: '',
  description: '',
  price: '',
  category: '',
  stock: '',
  image: null as File | null,
  imageUrl: '',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().typeError('Price must be a number').positive('Price must be positive').required('Price is required'),
  category: Yup.string().required('Category is required'),
  stock: Yup.number().typeError('Stock must be a number').min(0, 'Stock cannot be negative').required('Stock is required'),
});

interface ProductFormProps {
  categories: string[];
  onSuccess: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ categories, onSuccess }) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-800 rounded shadow p-8 mt-6 border border-gray-700 text-gray-100">
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={async (_unused, { setSubmitting, setStatus, resetForm }) => {
          setStatus(null);
          setSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1200));
            setStatus({ success: 'Product added successfully!' });
      setTimeout(() => {
              setStatus(null);
              resetForm();
        onSuccess();
      }, 1200);
    } catch {
            setStatus({ error: 'Failed to add product. Please try again.' });
    } finally {
            setSubmitting(false);
    }
        }}
      >
        {({ isSubmitting, setFieldValue, status }) => (
          <Form className="flex flex-col gap-4">
            {status?.success && <div className="mb-4 px-4 py-2 rounded bg-green-600 text-white text-center font-semibold">{status.success}</div>}
            {status?.error && <div className="mb-4 px-4 py-2 rounded bg-red-600 text-white text-center font-semibold">{status.error}</div>}
            <div>
              <label className="block font-semibold mb-1 text-gray-200" htmlFor="title">Name</label>
              <Field name="title" placeholder="Product name" className="border rounded px-3 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0" />
              <ErrorMessage name="title" component="div" className="text-red-400 text-xs mt-1" />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-200" htmlFor="description">Description</label>
              <Field as="textarea" name="description" placeholder="Product description" className="border rounded px-3 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0" />
              <ErrorMessage name="description" component="div" className="text-red-400 text-xs mt-1" />
            </div>
        <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-semibold mb-1 text-gray-200" htmlFor="price">Price ($)</label>
                <Field name="price" type="number" placeholder="0.00" className="border rounded px-3 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0" />
                <ErrorMessage name="price" component="div" className="text-red-400 text-xs mt-1" />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-1 text-gray-200" htmlFor="stock">Stock</label>
                <Field name="stock" type="number" placeholder="0" className="border rounded px-3 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0" />
                <ErrorMessage name="stock" component="div" className="text-red-400 text-xs mt-1" />
              </div>
        </div>
        <div>
              <label className="block font-semibold mb-1 text-gray-200">Category</label>
              <Field as="select" name="category" className="border rounded px-3 py-2 w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0">
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
              </Field>
              <ErrorMessage name="category" component="div" className="text-red-400 text-xs mt-1" />
        </div>
        <div>
              <label className="block font-semibold mb-2 text-gray-200">Product Image</label>
              <ImageUploader onUpload={(file, url) => setFieldValue('image', file) || setFieldValue('imageUrl', url)} previewUrl={undefined} disabled={isSubmitting} />
        </div>
        <button
          type="submit"
              className="bg-blue-600 text-white rounded px-4 py-2 font-semibold mt-2 disabled:opacity-60"
              disabled={isSubmitting}
        >
              {isSubmitting ? <span className="inline-block animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> : 'Add Product'}
        </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm; 
