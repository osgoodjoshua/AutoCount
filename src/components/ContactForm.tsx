import { useState } from 'react';
import Input from "./Input";
import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch } from "react-redux";
import { chooseMake, chooseModel, chooseYear, chooseColor } from "../redux/slices/RootSlice";
import { v4 as uuidv4 } from 'uuid';

interface ContactFormProps {
  id?: string[];
  onActionComplete: () => void;
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);

    try {
      if (props.id && props.id.length > 0) {
        await server_calls.update(props.id[0], data);
        console.log(`Updated: ${data.make} ${props.id}`);
      } else {
        const newCar = {
          id: uuidv4(), // Generate UUID for the new car
          ...data,
        };

        console.log('New Car:', newCar);

        dispatch(chooseMake(newCar.make));
        dispatch(chooseModel(newCar.model));
        dispatch(chooseYear(newCar.year));
        dispatch(chooseColor(newCar.color));

        await server_calls.create(newCar);
      }

      props.onActionComplete();
    } catch (error) {
      console.error('Error creating new car:', error);
      setError('Failed to create new car. Please try again.');
    }
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make">Make</label>
          <Input {...register('make')} name='make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name='model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name='year' placeholder="Year" />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <Input {...register('color')} name='color' placeholder="Color" />
        </div>
        <div className="flex p-1">
          <button type='submit' className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
