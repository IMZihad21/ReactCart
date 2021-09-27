// Fetch storage from localStorage
const getStorage = () => {
    let storage = localStorage.getItem('cart');
    return storage ? JSON.parse(storage) : [];
}

// Set new data in localStorage
const setStorage = data => {
    const storage = JSON.stringify(data);
    localStorage.setItem('cart', storage);
}

export { setStorage, getStorage }
