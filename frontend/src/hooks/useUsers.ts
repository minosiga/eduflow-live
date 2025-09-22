import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { usersAPI } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

export const useUserProfile = () => {
  const { isAuthenticated, token, loading } = useAuth();
  
  return useQuery({
    queryKey: ['user-profile'],
    queryFn: () => usersAPI.getProfile(),
    select: (data) => data.data.data.user,
    enabled: isAuthenticated && !!token && !loading,
    retry: false,
    staleTime: 0,
    gcTime: 0,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: usersAPI.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] });
    },
  });
};

export const useUserCourses = () => {
  const { isAuthenticated, token, loading } = useAuth();
  
  return useQuery({
    queryKey: ['user-courses'],
    queryFn: () => usersAPI.getUserCourses(),
    select: (data) => data.data.data.courses,
    enabled: isAuthenticated && !!token && !loading,
    retry: false,
    staleTime: 0,
    gcTime: 0,
  });
};

export const useTeachers = (params?: any) => {
  return useQuery({
    queryKey: ['teachers', params],
    queryFn: () => usersAPI.getTeachers(params),
    select: (data) => data.data.data,
  });
};

export const useTeacher = (id: string) => {
  return useQuery({
    queryKey: ['teacher', id],
    queryFn: () => usersAPI.getTeacher(id),
    select: (data) => data.data.data,
    enabled: !!id,
  });
};

export const useUserStats = () => {
  const { isAuthenticated, token, loading } = useAuth();
  
  return useQuery({
    queryKey: ['user-stats'],
    queryFn: () => usersAPI.getUserStats(),
    select: (data) => data.data.data.stats,
    enabled: isAuthenticated && !!token && !loading,
    retry: false,
    staleTime: 0,
    gcTime: 0,
  });
};

export const useCompleteLesson = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: usersAPI.completeLesson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-courses'] });
      queryClient.invalidateQueries({ queryKey: ['user-stats'] });
    },
  });
};
