import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
   const [resolved, setResolve] = useState(null),
         [loading, setLoading] = useState(false),
         [error, setError] = useState(null)

   const process = async () => {
      setLoading(true);
      try {
         const result = await promiseCreator();
         setResolve(result);
      } catch(e) {
         setError(e);
      }
      setLoading(false);
   }

   useEffect(()=> {
      process();
   }, deps)

   return [loading, resolved, error]
}