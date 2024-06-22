function handleError(error) {
    document.querySelector('.location').textContent = `${error.message}`;
}

export default handleError;