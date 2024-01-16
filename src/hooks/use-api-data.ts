// hooks/useApiData.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData, selectApiData, selectApiLoading, selectApiError } from '../slices/api-slice';

const useApiData = () => {
    const dispatch = useDispatch();
    const apiData = useSelector(selectApiData);
    const loading = useSelector(selectApiLoading);
    const error = useSelector(selectApiError);

    useEffect(() => {
        dispatch(fetchApiData())
    }, [dispatch]);

    return { apiData, loading, error };
};

export default useApiData;
