import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { coursesAPI } from '@/lib/api';

export const useCourses = (params?: any) => {
  return useQuery({
    queryKey: ['courses', params],
    queryFn: () => coursesAPI.getCourses(params),
    select: (data) => data.data.data,
  });
};

export const useCourse = (id: string) => {
  return useQuery({
    queryKey: ['course', id],
    queryFn: () => coursesAPI.getCourse(id),
    select: (data) => data.data.data.course,
    enabled: !!id,
  });
};

export const useCreateCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: coursesAPI.createCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    },
  });
};

export const useUpdateCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      coursesAPI.updateCourse(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      queryClient.invalidateQueries({ queryKey: ['course', id] });
    },
  });
};

export const useEnrollCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: coursesAPI.enrollCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      queryClient.invalidateQueries({ queryKey: ['user-courses'] });
    },
  });
};

export const useAddReview = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      coursesAPI.addReview(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['course', id] });
    },
  });
};

export const useSubjects = () => {
  return useQuery({
    queryKey: ['subjects'],
    queryFn: () => coursesAPI.getSubjects(),
    select: (data) => data.data.data.subjects,
  });
};

export const useLevels = () => {
  return useQuery({
    queryKey: ['levels'],
    queryFn: () => coursesAPI.getLevels(),
    select: (data) => data.data.data.levels,
  });
};
