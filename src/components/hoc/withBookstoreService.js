import React from 'react';
import {BookStoreSeviceConsumer} from "../Bookstore-service-context/Bookstore-service-context";

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookStoreSeviceConsumer>
        {
          (bookstoreService) => {
            return(
              <Wrapped {...props} bookstoreService={bookstoreService}/>
            )
          }
        }
      </BookStoreSeviceConsumer>
    )
  }
};

export default withBookstoreService;