import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className='loading'>
      <div className='image'>
        <img src="../../../assets/images/loading.svg" alt="loading"/>
      </div>
    </div>
  );
}

const ErrorHandler = () => {
  return <h2>An error is happened!</h2>;
}

const pageRenderer = (Wrapped) => {

  return function (props: any) {
    // Handle a specific logic then return a new component
    return (
      props.isLoading ? (
        <LoadingIndicator />
      ) : (
        props.error ? (
          <ErrorHandler {...props.error} />
        ) : (
          <Wrapped {...props} />
        )
      )
    )
  }

}

export default pageRenderer;
