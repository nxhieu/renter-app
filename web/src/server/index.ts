// import * as React from 'react';
import path from 'path';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import manifestHelpers from 'express-manifest-helpers';
import bodyParser from 'body-parser';
// import axios from 'axios';
import proxy from 'express-http-proxy';
import paths from '../../config/paths';
// import { AuthRequest } from '../shared/store/auth/actions';
import { loadData } from '../shared/App';
import { confirmationRequest } from '../shared/store/inspection/actions';
import { loadDataConfirmation } from '../shared/pages/InspectionConfirmation';
// import { configureStore } from '../shared/store';
import errorHandler from './middleware/errorHandler';
import serverRenderer from './middleware/serverRenderer';
import getStore from './middleware/getStore';
// import webhookVerification from './middleware/webhookVerification';
// import { i18nextXhr, refreshTranslations } from './middleware/i18n';

require('dotenv').config();

const app = express();
// const app = express.default();
app.use('/api', proxy('http://auth-service:8080'));
// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
// if (process.env.NODE_ENV === 'development') {
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
// }

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// It's probably a good idea to serve these static assets with Nginx or Apache as well:

// app.use(addStore);

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
    manifestHelpers({
        manifestPath: `${manifestPath}/manifest.json`,
    })
);

app.use('/inspection/confirmation/:inspectionId', (req, res) => {
    const id = req.params.inspectionId;
    const store = getStore(req);

    Promise.all([loadData_Confirmation(store.dispatch, id), loadData(store)])
        .then(() => serverRenderer()(req, res, store))
        .catch(() => serverRenderer()(req, res, store));
});

app.use('/', (req, res) => {
    const store = getStore(req);
    const promises = loadData(store);
    promises
        .then(() => {
            serverRenderer()(req, res, store);
        })
        .catch(() => serverRenderer()(req, res, store));
});

app.use(errorHandler);

app.listen(process.env.PORT || 8500, () => {
    console.log(
        `[${new Date().toISOString()}]`,
        chalk.blue(`App is running: http://localhost:${process.env.PORT || 8500}`)
    );
});

export default app;
