/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.java.hero.demojpa.demojpastepbystep;

import java.beans.PropertyChangeListener;
import java.beans.PropertyChangeSupport;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

/**
 *
 * @author Admin
 */
@Entity //@ chỉ ra đây là Entity cảu JPA
@Table(name = "sinhvien", catalog = "javahero", schema = "") //chỉ ra bảng mà class liên kết tới
@NamedQueries({ //các câu lệnh JPA Query thay thế SQL
    @NamedQuery(name = "Sinhvien.findAll", query = "SELECT s FROM Sinhvien s")
    , @NamedQuery(name = "Sinhvien.findByMa", query = "SELECT s FROM Sinhvien s WHERE s.ma = :ma")
    , @NamedQuery(name = "Sinhvien.findByTen", query = "SELECT s FROM Sinhvien s WHERE s.ten = :ten")
    , @NamedQuery(name = "Sinhvien.findByTenFullTextSearch", query = "SELECT s FROM Sinhvien s WHERE s.ten like :key")
    , @NamedQuery(name = "Sinhvien.findByNgaySinh", query = "SELECT s FROM Sinhvien s WHERE s.ngaySinh = :ngaySinh")})
public class Sinhvien implements Serializable {

    @Transient
    private PropertyChangeSupport changeSupport = new PropertyChangeSupport(this);

    private static final long serialVersionUID = 1L;
    @Id //chi ra đây là thuộc tính khóa chính
    @GeneratedValue(strategy = GenerationType.IDENTITY) //tự tăng
    @Basic(optional = false) //cấc tùy chọn liên kết cơ bản, cách thức JPA lấy dữ liệu từ db lên( eagerly -> lấy luôn khi load, lazily -> cần thì lấy)
    @Column(name = "Ma")//liên kết đến cột mã
    private Integer ma;
    
    @Basic(optional = false, fetch = FetchType.LAZY)
    //lúc nào cần mới lấy, tuy nhiên đây là 1 cột bình thường nên luôn lấy khi object của entity đc load về từ db
    @Column(name = "Ten")
    private String ten;
    
    @Basic(optional = false)
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
        Integer oldMa = this.ma;
        this.ma = ma;
        changeSupport.firePropertyChange("ma", oldMa, ma);
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        String oldTen = this.ten;
        this.ten = ten;
        changeSupport.firePropertyChange("ten", oldTen, ten);
    }

    public Date getNgaySinh() {
        return ngaySinh;
    }

    public void setNgaySinh(Date ngaySinh) {
        Date oldNgaySinh = this.ngaySinh;
        this.ngaySinh = ngaySinh;
        changeSupport.firePropertyChange("ngaySinh", oldNgaySinh, ngaySinh);
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
        return "com.java.hero.demojpa.demojpastepbystep.Sinhvien[ ma=" + ma + " ]";
    }

    public void addPropertyChangeListener(PropertyChangeListener listener) {
        changeSupport.addPropertyChangeListener(listener);
    }

    public void removePropertyChangeListener(PropertyChangeListener listener) {
        changeSupport.removePropertyChangeListener(listener);
    }
    
}
