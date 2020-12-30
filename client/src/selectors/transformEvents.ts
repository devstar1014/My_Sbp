import { createSelector } from 'reselect';

const getEligibleEvents = (state: ReduxState) => state.eligibleEvents;

export const transformEvents = createSelector([getEligibleEvents], events => {
  return events.map(
    ({ option1, option2, result, startTime }: EligibleBettingEventResponse, index) => ({
      eventId: index,
      option1: option1,
      option2: option2,
      result: Number(result),
      startTime: Number(startTime),
    })
  );
});
