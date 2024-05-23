import { EventProps } from '@customTypes/index'
import axiosInstance from './axiosInstance'

const EVENTS_PATH = 'events'

export const apiService = {
  getEvent: (id: string) => axiosInstance.get(`/${EVENTS_PATH}/${id}`),
  getEvents: () => axiosInstance.get(`/${EVENTS_PATH}`),
  createEvent: (event: EventProps) =>
    axiosInstance.post(`/${EVENTS_PATH}`, event),
  editEvent: (event: EventProps) => {
    const { id } = event
    return axiosInstance.put(`/${EVENTS_PATH}/${id}`, event)
  },
}
