import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/rackets/racketsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditRackets = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    model: '',

    condition: '',

    price: '',

    description: '',

    images: [],

    seller: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { rackets } = useAppSelector((state) => state.rackets);

  const { racketsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: racketsId }));
  }, [racketsId]);

  useEffect(() => {
    if (typeof rackets === 'object') {
      setInitialValues(rackets);
    }
  }, [rackets]);

  useEffect(() => {
    if (typeof rackets === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = rackets[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [rackets]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: racketsId, data }));
    await router.push('/rackets/rackets-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit rackets')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit rackets'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Model'>
                <Field name='model' placeholder='Model' />
              </FormField>

              <FormField label='Condition' labelFor='condition'>
                <Field name='Condition' id='Condition' component='select'>
                  <option value='New'>New</option>

                  <option value='Used'>Used</option>

                  <option value='Old'>Old</option>
                </Field>
              </FormField>

              <FormField label='Price'>
                <Field type='number' name='price' placeholder='Price' />
              </FormField>

              <FormField label='Description' hasTextareaHeight>
                <Field
                  name='description'
                  id='description'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField>
                <Field
                  label='Images'
                  color='info'
                  icon={mdiUpload}
                  path={'rackets/images'}
                  name='images'
                  id='images'
                  schema={{
                    size: undefined,
                    formats: undefined,
                  }}
                  component={FormImagePicker}
                ></Field>
              </FormField>

              <FormField label='Seller' labelFor='seller'>
                <Field
                  name='seller'
                  id='seller'
                  component={SelectField}
                  options={initialValues.seller}
                  itemRef={'users'}
                  showField={'firstName'}
                ></Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/rackets/rackets-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditRackets.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_RACKETS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditRackets;
