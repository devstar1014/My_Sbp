import { EligibleEvent } from './EligibleEvent';
import './EligibleEvents.css';

type Props = {
  addBet: AddBet;
  eligibleEvents: EligibleEvent[];
};

export const EligibleEvents = ({ addBet, eligibleEvents }: Props) => {
  return (
    <div className="eligible-events">
      <h3>Future Events</h3>
      <div>
        {console.log(eligibleEvents)}
        {eligibleEvents.map(
          ({ eventId, option1, option2, payoutOdds, startTime }: EligibleEvent) => (
            <EligibleEvent
              addBet={addBet}
              eventId={eventId}
              key={eventId}
              option1={option1}
              option2={option2}
              payoutOdds={payoutOdds}
              startTime={startTime}
            />
          )
        )}
      </div>
    </div>
  );
};
