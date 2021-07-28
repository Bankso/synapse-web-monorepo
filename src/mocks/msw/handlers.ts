import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../lib/utils/functions/getEndpoint'
import { mockSchemaBinding } from '../mockSchema'
import { rest } from 'msw'
import {
  mockFileEntity,
  mockFileEntityBundle,
  mockProjectEntity,
  mockProjectEntityBundle,
  mockPaginatedEntityHeaders,
  MOCK_FILE_ENTITY_ID,
  MOCK_FILE_NAME,
  MOCK_INVALID_PROJECT_NAME,
  MOCK_PROJECT_ID,
  MOCK_PROJECT_NAME,
} from '../entity/mockEntity'
import {
  mockUserBundle,
  mockUserProfileData,
  MOCK_USER_ID,
} from '../user/mock_user_profile'
import {
  ENTITY,
  ENTITY_BUNDLE_V2,
  ENTITY_SCHEMA_BINDING,
  FAVORITES,
  USER_ID_BUNDLE,
  USER_PROFILE_ID,
  USER_PROFILE,
} from '../../lib/utils/APIConstants'

const handlers = [
  rest.options('*', async (req, res, ctx) => {
    return res(ctx.status(200))
  }),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_PROFILE_ID(
      ':id',
    )}`,
    async (req, res, ctx) => {
      let response: any = {
        reason: `Mock Service worker could not find a user profile with ID ${req.params.id}`,
      }
      let status = 404
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserProfileData
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_PROFILE}`,
    async (req, res, ctx) => {
      // default return a mock UserProfile.
      let response: any = mockUserProfileData
      let status = 200
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_ID_BUNDLE(
      ':id',
    )}`,
    async (req, res, ctx) => {
      let response: any = {
        reason: `Mock Service worker could not find a user bundle with ID ${req.params.id}`,
      }
      let status = 404
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserBundle
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  // create entity
  rest.post(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY}`,
    async (req, res, ctx) => {
      let response: any = {
        reason: `Mock Service worker could not find a matching mock entity for this request : ${JSON.stringify(req.body)}`,
      }
      let status = 404
      if (req.body) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const requestBody = req.body as any
        if (requestBody.name === MOCK_FILE_NAME) {
          response = mockFileEntity
          status = 200
        } else if (requestBody.name === MOCK_PROJECT_NAME) {
          response = mockProjectEntity
          status = 200
        } else if (requestBody.name === MOCK_INVALID_PROJECT_NAME) {
          response.reason = 'Invalid project name'
          status = 403
        }
      }
      
      return res(ctx.status(status), ctx.json(response))
    },
  ),
  
  rest.post(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
      ':entityId',
    )}`,
    async (req, res, ctx) => {
      let response: any = {
        reason: `Mock Service worker could not find a mock entity bundle with ID ${req.params.entityId}`,
      }
      let status = 404
      if (req.params.entityId === MOCK_FILE_ENTITY_ID) {
        response = mockFileEntityBundle
        status = 200
      } else if (req.params.entityId === MOCK_PROJECT_ID) {
        response = mockProjectEntityBundle
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}${ENTITY_SCHEMA_BINDING(':entityId')}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockSchemaBinding))
    },
  ),

  rest.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}${FAVORITES}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockPaginatedEntityHeaders))
    },
  ),

]

export { handlers }
