import { EventProps } from '../types/events'
import axiosInstance from './axiosInstance'

const EVENTS_PATH = 'events'

export const apiService = {
  getEvent: (id: string) => axiosInstance.get(`/${EVENTS_PATH}/${id}`),
  getEvents: () => axiosInstance.get(`/${EVENTS_PATH}`),
  createEvent: (event: EventProps) =>
    axiosInstance.post(`/${EVENTS_PATH}`, event),
  editEvent: (id: string, event: EventProps) =>
    axiosInstance.put(`/${EVENTS_PATH}zzz/${id}`, event),
}
