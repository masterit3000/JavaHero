/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.java.hero.demojpa.demojpaservletjsp.dao.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Admin
 */
@Entity
@Table(name = "sinhvien", catalog = "javahero", schema = "")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Sinhvien.findAll", query = "SELECT s FROM Sinhvien s")
    , @NamedQuery(name = "Sinhvien.findByMa", query = "SELECT s FROM Sinhvien s WHERE s.ma = :ma")
    , @NamedQuery(name = "Sinhvien.findByTen", query = "SELECT s FROM Sinhvien s WHERE s.ten = :ten")
    , @NamedQuery(name = "Sinhvien.findByNgaySinh", query = "SELECT s FROM Sinhvien s WHERE s.ngaySinh = :ngaySinh")})
public class Sinhvien implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Ma")
    private Integer ma;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 222)
    @Column(name = "Ten")
    private String ten;
    @Basic(optional = false)
    @NotNull
    @Column(name = "NgaySinh")
    @Temporal(TemporalType.DATE)
    private Date ngaySinh;

    public Sinhvien() {
    }

    public Sinhvien(Integer ma) {
        this.ma = ma;
    }

    public Sinhvien(Integer ma, String ten, Date ngaySinh) {
        this.ma = ma;
        this.ten = ten;
        this.ngaySinh = ngaySinh;
    }

    public Integer getMa() {
        return ma;
    }

    public void setMa(Integer ma) {
        this.ma = ma;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public Date getNgaySinh() {
        return ngaySinh;
    }

    public void setNgaySinh(Date ngaySinh) {
        this.ngaySinh = ngaySinh;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (ma != null ? ma.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Sinhvien)) {
            return false;
        }
        Sinhvien other = (Sinhvien) object;
        if ((this.ma == null && other.ma != null) || (this.ma != null && !this.ma.equals(other.ma))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.java.hero.demojpa.demojpaservletjsp.dao.entity.Sinhvien[ ma=" + ma + " ]";
    }
    
}
