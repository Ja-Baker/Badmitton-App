import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/rackets/racketsSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

const RacketsView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { rackets } = useAppSelector((state) => state.rackets);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View rackets')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View rackets')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Model</p>
            <p>{rackets?.model}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Condition</p>
            <p>{rackets?.condition ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Price</p>
            <p>{rackets?.price || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Description</p>
            {rackets.description ? (
              <p dangerouslySetInnerHTML={{ __html: rackets.description }} />
            ) : (
              <p>No data</p>
            )}
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Images</p>
            {rackets?.images?.length ? (
              <ImageField
                name={'images'}
                image={rackets?.images}
                className='w-20 h-20'
              />
            ) : (
              <p>No Images</p>
            )}
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Seller</p>

            <p>{rackets?.seller?.firstName ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Reviews Racket</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Content</th>

                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rackets.reviews_racket &&
                      Array.isArray(rackets.reviews_racket) &&
                      rackets.reviews_racket.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/reviews/reviews-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='content'>{item.content}</td>

                          <td data-label='rating'>{item.rating}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!rackets?.reviews_racket?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Transactions Racket</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>TransactionDate</th>

                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rackets.transactions_racket &&
                      Array.isArray(rackets.transactions_racket) &&
                      rackets.transactions_racket.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/transactions/transactions-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='transaction_date'>
                            {dataFormatter.dateTimeFormatter(
                              item.transaction_date,
                            )}
                          </td>

                          <td data-label='status'>{item.status}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!rackets?.transactions_racket?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/rackets/rackets-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

RacketsView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_RACKETS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default RacketsView;
