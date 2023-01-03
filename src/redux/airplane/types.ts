// what parameters the airplane type has. I use them for fetching the data from the API server.
export type Airplane = {
  id: string;
  title: string;
  seatMapUrl: string; // Seat map image is to be fetched once the user selects the exact airplane model from the list. Seat map image is to be shown on the selected airplane page.
  listImgUrl: string;
};

//fetching statuses.
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}
// string is what the user inputs if he wants to search for a specific airplane model.
export type SearchAirplaneParams = {
  search: string;
};

export interface AirplaneSliceState {
  items: Airplane[];
  status: Status;
}
