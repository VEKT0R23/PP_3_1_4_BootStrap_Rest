package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.models.Role;

import java.util.List;
import java.util.Set;

public interface RoleService {

    Set<Role> getAllRoles();

    Role getRoleById(Long id);

    void addRole(Role role);
}
