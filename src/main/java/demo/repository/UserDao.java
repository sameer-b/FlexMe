package demo.repository;

import java.util.List;

import demo.model.User;
public interface UserDao
{
    public User findById(Long id);

    public User findByEmail(String email);

    public void register(User user);

    public List<User> findAll();
}
