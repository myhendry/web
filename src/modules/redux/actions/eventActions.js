import moment from "moment";

export const CREATE_EVENT = "CREATE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";

const objectToArray = object => {
  if (object) {
    return Object.entries(object).map(e => Object.assign(e[1], { id: e[0] }));
  }
};

export const createEvent = event => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;

    const newEvent = {
      ...event,
      hostUid: user.uid,
      hostedBy: user.displayName,
      created: Date.now(),
      attendees: {
        [user.uid]: {
          going: true,
          joinDate: Date.now(),
          displayName: user.displayName,
          host: true
        }
      }
    };

    try {
      const createdEvent = await firestore.add(`events`, newEvent);
      await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`, {
        eventId: createdEvent.id,
        userUid: user.uid,
        eventDate: event.date,
        host: true
      });
    } catch (err) {
      console.log(err);
    }
  };
};
