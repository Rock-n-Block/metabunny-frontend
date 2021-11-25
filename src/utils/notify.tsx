import { toast, ToastOptions } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const notify = (
  msg: string,
  type: 'success' | 'info' | 'error' | 'link' = 'info',
  tokenId?: string | number,
) => {
  const options = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  } as ToastOptions;

  const notifyType = {
    success: () => toast.success(msg, options),
    info: () => toast.info(msg, options),
    error: () => toast.error(msg, options),
    link: () =>
      toast.info(
        <a
          href={`https://testnets.opensea.io/assets/0x88d5a12eaf4ab5441a3d54b87f7745c64548a330/${tokenId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {msg}
        </a>,
        options,
      ),
  };

  notifyType[type]();
};
