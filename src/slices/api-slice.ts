import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../thunks/app-thunk';
import { apiService } from '../services/api-service';

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string; // Assuming 'url' is the property representing the image URL
    thumbnailUrl: string;
  }

interface ApiState {
    data: Photo[];
    loading: boolean;
    error: string | null;
}

const initialState: ApiState = {
    data: [],
    loading: false,
    error: null,
};

// export const fetchApiData = createAsyncThunk('api/fetchApiData', async () => {
//     const response = await apiService.fetchData();
//     return response.data;
// });
  
export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<any[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //       .addCase(fetchApiData.pending, (state) => {
    //         state.loading = true;
    //         state.error = null;
    //       })
    //       .addCase(fetchApiData.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.data = action.payload;
    //       })
    //       .addCase(fetchApiData.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.error.message ?? 'Something went wrong';
    //       });
    //   },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = apiSlice.actions;


export const fetchApiData = (): AppThunk => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
        const response = await apiService.fetchData();
        dispatch(fetchDataSuccess(response.data));
    } catch (error) {
        let errorMessage = error ? String(error) : 'Unknown error'
        dispatch(fetchDataFailure(errorMessage));
    }
};

export const selectApiData = (state: { api: ApiState }) => state.api.data;
export const selectApiLoading = (state: { api: ApiState }) => state.api.loading;
export const selectApiError = (state: { api: ApiState }) => state.api.error;

export default apiSlice.reducer;
