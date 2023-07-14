import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { useAppDispatch } from "./redux/hooks";
import { useEffect} from "react";
import { auth } from "./lib/firebase.config";
import { setUser } from "./redux/features/users/userSLice";

function App() {
  const dispatch = useAppDispatch();

  // const { user } = useAppSelector((state) => state.user);

  // const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (CurrentUser) => {
      if (CurrentUser) {
        // setUser(Cuser)
        dispatch(setUser(CurrentUser));
        // console.log(user,"from app");
      }
    });
  }, [dispatch]);

  // console.log(user,"from App.tsx");

  return (
    <div className="">
      <MainLayout />
    </div>
  );
}

export default App;
