package demo.javahero.repository;

import demo.javahero.domain.TeacherDocument;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the TeacherDocument entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TeacherDocumentRepository extends JpaRepository<TeacherDocument, Long> {

}
