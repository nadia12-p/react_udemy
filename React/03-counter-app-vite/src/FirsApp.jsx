const newMessage = {
  message: "Hola",
  title: "Nadia",
};

const getMessage = () => {
  const message = newMessage.message + ' ' + newMessage.title;
  return message
}

export const FirstApp = () => {
  return (
    <>
      <h1>{getMessage()}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un subtitulo</p>
    </>
  );
};
