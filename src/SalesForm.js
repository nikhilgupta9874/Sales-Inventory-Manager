import React, { useEffect } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';

function SalesForm({ id, isLastForm, onDuplicate, onUpdateFormData }) {
  const productOptions = [
    { value: '1" DRIVE DEEP IMPACT SOCKET 30mm FORCE', label: '1" DRIVE DEEP IMPACT SOCKET 30mm FORCE' },
    { value: '1" DRIVE DEEP IMPACT SOCKET 32mm FORCE', label: '1" DRIVE DEEP IMPACT SOCKET 32mm FORCE' },
    { value: '1" DRIVE DEEP IMPACT SOCKET 33mm FORCE', label: '1" DRIVE DEEP IMPACT SOCKET 33mm FORCE' },
    { value: 'plier', label: 'Plier' }
  ];

  const orderOptions = [
    { value: 'Billed', label: 'Billed' },
    { value: 'Cash', label: 'Cash' }
  ];

  const { register, control, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onUpdateFormData(id, data); // Call the onUpdateFormData prop with form data
  };

  useEffect(() => {
    const subscription = watch((value) => {
      onUpdateFormData(id, value); // Update form data whenever it changes
    });
    return () => subscription.unsubscribe();
  }, [watch, id, onUpdateFormData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Customer:
        <input
          type="text"
          {...register("customer", { required: true })}
        />
        {errors.customer && <span>This field is required</span>}
      </label>
      <label>
        Quantity:
        <input
          type="number"
          {...register("quantity", { required: true })}
        />
        {errors.quantity && <span>This field is required</span>}
      </label>
      <label>
        Sales Price:
        <input
          type="number"
          {...register("salesPrice", { required: true })}
        />
        {errors.salesPrice && <span>This field is required</span>}
      </label>
      <label>
        Sales Date:
        <input
          type="date"
          {...register("salesDate", { required: true })}
        />
        {errors.salesDate && <span>This field is required</span>}
      </label>
      <label>
        Product:
        <Controller
          name="product"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              options={productOptions}
              onChange={(selectedOption) => field.onChange(selectedOption.value)}
              value={productOptions.find(option => option.value === field.value)}
            />
          )}
        />
        {errors.product && <span>This field is required</span>}
      </label>
      <label>
        Order Type:
        <Controller
          name="orderType"
          control={control}
          rules={{ required: true }}git
          render={({ field }) => (
            <Select
              {...field}
              options={orderOptions}
              onChange={(selectedOption) => field.onChange(selectedOption.value)}
              value={orderOptions.find(option => option.value === field.value)}
            />
          )}
        />
        {errors.orderType && <span>This field is required</span>}
      </label>
      {isLastForm && (
        <div>
          <button type="button" onClick={onDuplicate}>
            Duplicate Form
          </button>
          <button type="submit">Save Form Data</button>
        </div>
      )}
    </form>
  );
}

export default SalesForm;