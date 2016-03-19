package org.jboss.tools.example.springmvc.mvc;

import java.util.List;

import org.jboss.tools.example.springmvc.domain.User;
import org.jboss.tools.example.springmvc.repo.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import cpabe.*;

@Controller
@RequestMapping("/rest/users")
public class UserRestController
{
    @Autowired
    private UserDao memberDao;

    @RequestMapping(method=RequestMethod.GET, produces="application/json")
    public @ResponseBody List<User> listAllUsers()
    {
        String attr_list =  "objectClass:inetOrgPerson objectClass:organizationalPerson " + "sn:student2 cn:student2 uid:student2 userPassword:student2 " + "ou:idp o:computer mail:student2@sdu.edu.cn title:student";

        String pubfile = "/var/lib/openshift/56eb7a5d2d5271bb82000 019/app-root/data/pub_key";
        String mskfile = "/var/lib/openshift/56eb7a5d2d5271bb82000 019/app-root/data/master_key";
        String prvfile = "/var/lib/openshift/56eb7a5d2d5271bb82000 019/app-root/data/prv_key";

        Cpabe test = new Cpabe();
        try {
            test.keygen(pubfile, prvfile, mskfile, attr_list);
        }catch (Exception e) {

        }
        return memberDao.findAll();
    }

    @RequestMapping(value="/{id}", method=RequestMethod.GET, produces="application/json")
    public @ResponseBody User lookupUserById(@PathVariable("id") Long id)
    {
        return memberDao.findById(id);
    }

    @RequestMapping(method=RequestMethod.POST, produces="text/plain")
    public @ResponseBody String save(User user) {
        try
        {
            memberDao.register(user);
            return "{ message: 'success'}";
        }
        catch(Exception e) {
            return "{ message: 'fail'}";
        }
    }
}
