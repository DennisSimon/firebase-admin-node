/*!
 * Copyright 2020 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FirebaseApp } from '../firebase-app';
import * as firebaseAdmin from '../index';
import * as adminRtdbApi from './database';
import * as firebaseRtdbApi from '@firebase/database';

export function database(app?: FirebaseApp): firebaseRtdbApi.Database {
  if (typeof(app) === 'undefined') {
    app = firebaseAdmin.app();
  }
  return app.database();
}

/**
 * We must define a namespace to make the typings work correctly. Otherwise
 * `admin.database()` cannot be called like a function. Temporarily,
 * admin.database is used as the namespace name because we cannot barrel 
 * re-export the contents from @firebase/database-types, and we want it to
 * match the namespacing in the re-export inside src/index.d.ts
 */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace admin.database {
  // See https://github.com/microsoft/TypeScript/issues/4336
  /* eslint-disable @typescript-eslint/no-unused-vars */
  // See https://github.com/typescript-eslint/typescript-eslint/issues/363
  export import DataSnapshot = firebaseRtdbApi.DataSnapshot;
  export import OnDisconnect = firebaseRtdbApi.OnDisconnect;
  export import EventType = adminRtdbApi.EventType;
  export import Query = firebaseRtdbApi.Query;
  export import Reference = firebaseRtdbApi.Reference;
  export import ThenableReference = adminRtdbApi.ThenableReference;
  export import enableLogging = firebaseRtdbApi.enableLogging;
  export import ServerValue = firebaseRtdbApi.ServerValue;
  // There is a known bug where @firebase/database-types FirebaseDatabase
  // cannot be used as an interface for @firebase/database Database.
  // See https://github.com/firebase/firebase-js-sdk/issues/3476
  export import Database = firebaseRtdbApi.Database;
}
