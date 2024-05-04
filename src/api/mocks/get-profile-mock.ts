import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'john Doe',
      email: 'johndoe@exampole.com',
      phone: '6568465',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
