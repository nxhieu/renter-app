import React from 'react';
import { Banner } from '../../components/Banner';
import { Whatwedo } from '../../components/Whatwedo/Whatwedo';
import { Footer } from '../../components/Footer/Footer';
import { Roomcarousel } from '../../components/Roomcarousel/Roomcarousel';
const App: React.FC<any> = () => {
    // const { t } = useTranslation();
    // const [isLoginButtonClicked, setLoginButtonClicked] = useState<boolean>(false);

    // const onLoginButtonClicked = (): void => {
    //     setLoginButtonClicked(!isLoginButtonClicked);
    // };

    // const onLoginButtonClickedSetFalse = (): void => {
    //     setLoginButtonClicked(false);
    // };

    return (
        <React.Fragment>
            <Banner />
            <Whatwedo />
            <Roomcarousel />
            <Footer />
        </React.Fragment>
    );
};

export default App;
